import Posts from "components/postlibs/PostCard";
import { HomeASides } from "components/ASides";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { no: string } }) {
  try {
    return (
      <div id="main-container" className="homepage">
        <Posts page={parseInt(params.no)} />
        <HomeASides />
      </div>
    );
  } catch (e) {
    return notFound();
  }
}
