import { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import Film from "./Film";

export default function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        allFilms {
          films {
            id
            ...Film_item
          }
        }
      }
    `,
    {}
  );

  const films = data?.allFilms?.films?.filter((film) => film != null);

  return (
    <div>
      <h1>Star Wars Films</h1>
      {films?.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
}