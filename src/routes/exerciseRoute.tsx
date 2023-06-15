import { CreateExercisePage } from "../components/pages/CreateExercisePage";

import {
    createBrowserRouter
} from "react-router-dom";
import { PageContent } from "../components/common/PageContent"
import { ExerciseList } from "../components/pages/ExercisesPage";
import { HomePage } from "../components/pages/HomePage";

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
