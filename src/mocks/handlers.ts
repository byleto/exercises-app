import { rest } from "msw";

const exercisesMock = [
  {
    id: "02530505-7184-4b56-916f-7127a0c1fffd",
    content: "sample content",
    user_id: "9d2ad109-5532-40e5-ab41-c494b4debaa3",
    created_at: "2023-06-15T04:18:59.000Z",
    user: {
      name: "Barry Krajcik",
    },
  },
  {
    id: "0d9add9b-ba67-4043-979b-153a6f0985a6",
    content: "sample content",
    user_id: "39377a9b-b200-4f16-9fb2-3a906a73a002",
    created_at: "2023-06-15T03:00:05.000Z",
    user: {
      name: "Juan Kautzer",
    },
  },
];

export const handlers = [
  rest.get("/api/exercises", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(exercisesMock));
  }),
  rest.post("/api/exercise", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        message: "Exercise created successfully",
        created_exercise: exercisesMock[0],
      })
    );
  }),
];
