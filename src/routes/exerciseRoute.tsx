import { CreateExercisePage } from "../components/CreateExercisePage";

import {
    createBrowserRouter
} from "react-router-dom";
import { PageContent } from "../components/PageContent"
import { ExerciseList } from "../components/ExerciseList";
import { HomePage } from "../components/HomePage";

export const router = createBrowserRouter([
  {
    path: "create",
    element: (<PageContent> <CreateExercisePage /></PageContent>),
  },
  {
    path: "exercises",
    element: (<PageContent> <ExerciseList /></PageContent>),
  },
  {
    path: "/",
    element: (<PageContent> <HomePage /></PageContent>),
  },
]);
