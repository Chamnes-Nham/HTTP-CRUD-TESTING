// src/__tests__/run.test.ts

import app from "@/src/app";
import configs from "@/src/config";
import { connectMongoDB } from "@/src/database/db";
import { run } from "@/src/server";

jest.mock("@/src/config");
jest.mock("@/src/database/db");

describe("run function", () => {
  it("should start the server successfully", async () => {
    // (connectMongoDB as jest.Mock).mockResolvedValueOnce(undefined)

    console.log = jest.fn();

    await run();

    expect(connectMongoDB).toHaveBeenCalledTimes(1);
    expect(app.listen).toHaveBeenCalledWith(configs.port, expect.any(Function));
    expect(console.log).toHaveBeenCalledWith(`User Service running on Port: ${configs.port}`);
  });

  // it("should handle errors during startup", async () => {
  //   const error = new Error("Connection error");
  //   // (connectMongoDB as jest.Mock).mockRejectedValueOnce(error);

  //   console.error = jest.fn();
  //   const originalExit = process.exit;
  //   process.exit = jest.fn() as any; // Type casting jest.fn() to any to avoid type errors

  //   try {
  //     await run();
  //   } catch (e) {
  //     // Handle the exception to prevent it from crashing the test runner
  //   }

  //   expect(connectMongoDB).toHaveBeenCalledTimes(1);
  //   expect(console.error).toHaveBeenCalledWith("Error starting the server:", error);
  //   expect(process.exit).toHaveBeenCalledWith(1);

  //   process.exit = originalExit; // Restore original process.exit after test
  // });
});