// Jest setup provided by Grafana scaffolding
import './.config/jest-setup';

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
