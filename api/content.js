import {
  getDefaultContent,
  getAuthenticatedUser,
  getGitHubConfig,
  hasGitHubConfig,
  json,
  readGithubContent,
  writeGithubContent,
} from './_lib.js';

function mergePayload(body = {}) {
  const defaults = getDefaultContent();
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    siteConfig: {
      ...defaults.siteConfig,
      ...(body.siteConfig && typeof body.siteConfig === 'object' ? body.siteConfig : {}),
    },
    tabs: Array.isArray(body.tabs) ? body.tabs : defaults.tabs,
    documents: Array.isArray(body.documents) ? body.documents : defaults.documents,
    documentSections: Array.isArray(body.documentSections) ? body.documentSections : defaults.documentSections,
  };
}

export async function GET() {
  const defaults = getDefaultContent();

  if (!hasGitHubConfig()) {
    return json({ ...defaults, source: 'defaults' });
  }

  try {
    const { filePath } = getGitHubConfig();
    const stored = await readGithubContent(filePath);
    if (!stored?.content) {
      return json({ ...defaults, source: 'defaults' });
    }

    return json({ ...stored.content, source: 'github' });
  } catch (error) {
    return json({ ...defaults, source: 'defaults', warning: error.message }, { status: 200 });
  }
}

export async function POST(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return json({ error: 'Phiên đăng nhập admin đã hết hạn hoặc không hợp lệ.' }, { status: 401 });
  }

  if (!hasGitHubConfig()) {
    return json({ error: 'Chưa cấu hình GitHub token / repo / owner.' }, { status: 500 });
  }

  const body = await request.json().catch(() => ({}));
  const payload = mergePayload(body);
  const { filePath } = getGitHubConfig();

  try {
    const commit = await writeGithubContent(
      filePath,
      payload,
      `Update ERP Guidance content by ${user.username}`
    );

    return json({
      ok: true,
      content: payload,
      commit,
    });
  } catch (error) {
    return json({ error: error.message || 'Không thể commit lên GitHub.' }, { status: 500 });
  }
}
