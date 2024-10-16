import { options } from "./controller";

export async function getActorDetails(actorID) {
  let response = await fetch(
    "https://api.themoviedb.org/3/person/" + actorID,
    options
  );
  response = await response.json();
  return response;
}
