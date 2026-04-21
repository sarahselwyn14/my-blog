
import styles from "./globals.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/Menu/Menu";
export default async function Home() {
  // 1. Fetch the data from the API route you created
  // We use the full URL for the server-side fetch
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", // This ensures you get fresh data every time
  });
  
  const posts = await response.json();

  return (
    <div className = 'container'>
      <Featured/>
      <categoryList/>
      <div className = 'content'>
        <cardList/>
        <Menu/>
        

      </div>



    </div>
  );
}