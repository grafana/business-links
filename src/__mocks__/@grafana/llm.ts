const llm = {
  streamChatCompletions: jest.fn(),
  chatCompletions: jest.fn(),
  enabled: jest.fn().mockResolvedValue(false),
  health: jest.fn().mockResolvedValue({ ok: false }),
};

const mcp = {
  enabled: jest.fn().mockResolvedValue(false),
  callTool: jest.fn(),
  listTools: jest.fn().mockResolvedValue([]),
};

export { llm, mcp };
