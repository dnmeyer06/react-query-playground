import ContentBlock from "../components/ContentBlock";
import "../styles/character-page.css";
import { useRequestAllData } from "../requests/useQueries";
import { useParams, Link } from "react-router-dom";
import classNames from "classnames";

function ContentPage({ contentType }) {
  let { page } = useParams();

  const { isLoading, error, data } = useRequestAllData(contentType, page);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="character-grid">
        {data.results.map((content) => (
          <ContentBlock content={content} key={content.id} />
        ))}
      </div>
      <Link disabled={!data.info.prev} to={`${+page - 1}`}>
        Prev
      </Link>

      {Array.from(Array(data.info.pages).keys()).map((pageIndex) => {
        const pageNumber = pageIndex + 1;

        return (
          <Link key={pageIndex} to={`${pageNumber}`}>
            <button
              className={classNames({ "current-page": pageNumber === +page })}
            >
              {pageNumber}
            </button>
          </Link>
        );
      })}

      <Link disabled={!data.info.next} to={`${+page + 1}`}>
        Next
      </Link>
    </>
  );
}

export default ContentPage;
