import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Rightbar from "@/components/rightbar";
import DataTable from "@/components/dataTable";





export default function Home() {
  return (
    <main className="mainHome">
      <Sidebar />
      <Navbar />
      <Rightbar/>
      <DataTable/>
    </main>
  );
}
