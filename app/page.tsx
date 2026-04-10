import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-pink dark:text-zinc-50">

            Sarah Selwyn's Blog + Portfolio
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Hello! My name is Micahebensarah SelwynDuraisingh or Sarah for short! I am an 11th Grader currently at Harmony Science Academy! I have a strong interest in Engineering and aspire to be a Civil Engineer to help create facilities and infrastructure in areas of need.Throughout my high school years, I have earned certifications in AutoCad Programs such as Inventor and Fusion. In addition, I am a part of the Code2College program to develop my coding skills and have built a strong foundation in Python, HTML and CSS.  Aside from my future goals, I currently am a pianist at my church, and a part-time tutor where I tutor students in Math, free of cost!. I’m also an active member in my school’s robotics and science olympiad teams. For college, I’m looking forward to applying to UT Austin  due to its strong engineering programs  and its proximity near home ! Overall, I hope to be someone that young minds, especially girls look up to when considering Computer Science or Engineering as their future, giving them courage and motivation that it's possible to grow in these fields! {" "}

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
