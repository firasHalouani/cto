/*
  Robust Prisma client wrapper for Next.js

  - Ensures `PRISMA_CLIENT_ENGINE_TYPE` is set to `binary` before loading @prisma/client
    (helps avoid the 'client' engine requiring adapter/accelerateUrl during builds).
  - Loads @prisma/client via `require` fallback to be compatible with various package shapes.
  - Exports a single global Prisma client instance in development to avoid multiple connections.
*/

/* eslint-disable @typescript-eslint/no-require-imports */
// Ensure the engine env is set early (before importing the package)
if (!process.env.PRISMA_CLIENT_ENGINE_TYPE) {
  process.env.PRISMA_CLIENT_ENGINE_TYPE = 'binary'
}

// Use a runtime require so TypeScript won't complain if package shape differs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _prismaPkg: any = require('@prisma/client')
const PrismaClient: new (...args: any[]) => any =
  _prismaPkg?.PrismaClient ?? _prismaPkg?.default ?? _prismaPkg

declare global {
  // eslint-disable-next-line no-var
  var prisma: any | undefined
}

const client = global.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') global.prisma = client

export const prisma = client