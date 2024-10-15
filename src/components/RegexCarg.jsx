import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


const handleWheel = (e) => {
  if((! e.shiftKey) || e.altKey || e.metaKey || e.ctrlKey ) {
    return;
  }
  let h = parseInt($("imgpage").height) * (e.deltaY < 0 ? -1 : 1);
  $("imgpage").style.height = (h * 1.1).toString() + "px";
}


export default function RegexCard(props) {
  return (
    <div id="divregex" className="half">
      <List id="regexlist">
        <ListItem />
      </List>
    </div>
  );
}
