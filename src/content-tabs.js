import { tabs as defaultTabs } from './config.js';

const LEGACY_TAB_IDS = {
  'production-order-main': 'create-wo',
};

function clone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

// Keep the current module structure while retaining saved media and custom tabs.
export function mergeContentTabs(savedTabs, defaults = defaultTabs, aliases = {}) {
  const saved = Array.isArray(savedTabs) ? savedTabs : [];
  const defaultIds = new Set(defaults.map((tab) => tab.id));
  const merged = defaults.map((defaultTab) => {
    const savedTab = saved.find((tab) => tab.id === defaultTab.id)
      || saved.find((tab) => aliases[tab.id] === defaultTab.id);
    const tab = {
      ...clone(defaultTab),
      ...(savedTab ? clone(savedTab) : {}),
      id: defaultTab.id,
    };

    if (savedTab && savedTab.id !== defaultTab.id) tab.label = defaultTab.label;
    if (Array.isArray(defaultTab.children)) {
      tab.children = mergeContentTabs(
        savedTab?.children,
        defaultTab.children,
        defaultTab.id === 'production-order' ? LEGACY_TAB_IDS : {},
      );
    }
    return tab;
  });

  for (const tab of saved) {
    const canonicalId = aliases[tab.id] || tab.id;
    if (!defaultIds.has(canonicalId)) merged.push(clone(tab));
  }
  return merged;
}
