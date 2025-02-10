import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";

// Props are: html = HTML content (as from a file or a text fetch) - html5, utf8.
//            LLM results in for form of 1 or more arrays of alt-text strings, json arrays of arrays of strings
                       

export default function ExamineHtml(props) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(props.html, "text/html");

  // if no base url, find it as the meta tag for dcterms.source
  // let url_set = [
  console.log(
    props.html.match(/\"dcterms\.source\"\s+content=\"/));
    // props.html.match(/\"dcterms\.source\"\s+content=\"(.*?)\"/isu[1]));
  debugger;
    // props.html.match(/\"dcterms\.isFormatOf\"\s+href=\"(.*)?\"/isu)[1];
    // props.html.match(/\"og:url"\s+content=\"(.*?)\"/isu)[1];
    // props.html.match(/\"og:image\"\s+content=\"(.*?)\"/isu)[1];
  console.log(url_set);

  const iurl = new URL(url_set[0]);
  props.setUrl(iurl);

  return (
    <>
      <div id="teimain">
        <EditorCard
          html={props.html}
        />
        <PreviewCard
          urlBase={urlBase}
          html={props.html}
          image={props.image}
          setImage={props.setImage}
        />
        <ImageList
          urlBase={urlBase}
          images={props.images}
          image={props.image}
          setImage={props.setImage}
        />
      </div>
    </>
  );
}
