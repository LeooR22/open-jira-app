interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Amet aliqua sunt duis ipsum sunt.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In-progress: Ad cillum officia duis voluptate adipisicing.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Nisi aliquip voluptate laboris esse non ea sit amet laboris.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
