import {
  clearSessionCookie,
  createSessionCookie,
  getAdminCredentials,
  getAuthenticatedUser,
  json,
} from './_lib.js';

export async function GET(request) {
  const user = getAuthenticatedUser(request);
  if (!user) {
    return json({ authenticated: false }, { status: 401 });
  }

  return json({
    authenticated: true,
    username: user.username,
    expiresAt: user.exp,
  });
}

export async function POST(request) {
  const { username, password } = await request.json().catch(() => ({}));
  const credentials = getAdminCredentials();
  const secure = new URL(request.url).protocol === 'https:';

  if (username !== credentials.username || password !== credentials.password) {
    return json({ error: 'Tài khoản hoặc mật khẩu chưa đúng.' }, { status: 401 });
  }

  const headers = new Headers();
  headers.append('Set-Cookie', createSessionCookie(username, { secure }));

  return json(
    {
      authenticated: true,
      username,
    },
    { headers }
  );
}

export async function DELETE(request) {
  const headers = new Headers();
  const secure = new URL(request.url).protocol === 'https:';
  headers.append('Set-Cookie', clearSessionCookie({ secure }));
  return json({ authenticated: false }, { status: 200, headers });
}
