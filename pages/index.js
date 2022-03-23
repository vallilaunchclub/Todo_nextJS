import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Image
            src={"/todo.jpg"}
            alt="todo-image"
            width={200}
            height={200}
            class="absolute"
            layout="responsive"
          />
        </div>
        <div>
          <Link href="/list">
            <button
              className="bg-gray-500 text-white py-3 px-6 rounded text-center 
              tracking-wider rounded-full hover:bg-blue-500">
              DISPLAY LIST
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
