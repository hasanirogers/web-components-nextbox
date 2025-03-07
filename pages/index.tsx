import Image from "next/image";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";
import DefaultLayout from "../app/layouts/default";
import Head from "../app/components/Head";
import "./index.scss";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Head
        title="Web Components + Next.js"
        description="An example on how to use Web Component in an Next.js app."
      />
      <main className={"main"}>
        <div className={"description"}>
          <p>
            In order for the Web Components to display correct, you must build them client side with rollup. Build them with <code>npm run build:rollup</code> in the terminal. For more information on this strategy, <a href="https://blog.hasanirogers.me/2024/08/web-components-and-ssr-with-nextjs.html" target="_blank">see this blog</a>.
          </p>
        </div>
        <div className={"center"}>
          <div>
            <a href="https://kemet.dev" target="_blank">
              <svg width="512" height="512" fill="currentColor" viewBox="0 0 512 512" preserveAspectRatio="none">
                <g id="anubis">
                  <path d="M201 5.5c-1.5 1.8-.9 5.6 2.7 17.5 2.5 8.4 2.7 8.5 12 17.4 32.9 31.1 53.3 67.7 56.8 101.9l.7 6.8 6.6 3c3.6 1.6 6.7 2.8 6.9 2.6.5-.5-7-26.4-11-38.2-6-17.4-10.6-28.5-19.2-46-12.9-26.2-26.8-46.2-41.6-59.9-7.4-6.9-11.3-8.3-13.9-5.1z"></path>
                  <path d="M168.5 17c-.3.6 5.9 20.5 13.9 44.3 20.3 60.4 26.1 82 27.3 100.8.5 8.6.3 10.2-1.6 14-5 10.2-14.4 17.3-40.8 30.8-15.4 7.8-21.1 11.2-23.5 14.1-1.8 2.1-7.3 10.5-12.3 18.6-12.6 20.7-22.5 34.4-31.9 44.2-6.5 6.7-12.2 11.1-28.1 21.7-31.3 20.6-41.1 29.4-40.3 36.2.2 2.2 1.8 3.8 7.3 7.5C48.6 356.1 61 362 65 362c2 0 8.8-2.3 15.5-5.1 28.4-12.1 63.7-25 75.5-27.5 5.6-1.2 8.3-1.1 20 .2 15.1 1.8 27.1 1.4 34.2-1.1 5.3-1.9 11.8-7.6 14.5-12.9l1.8-3.4 6 8.9c3.3 4.8 6.4 8.7 6.9 8.6.5-.2 1.5-1.2 2.2-2.3 1.2-1.7.5-3.7-6-16.6-10.1-20-12.1-26.2-10.7-33 .7-2.9 3.4-9.4 6.1-14.3 11.1-20 16.2-33.1 23-59.7 9.8-38.7 10.5-56.5 2.9-81.6-6.8-22.5-29.7-55-60.9-86.3-15.5-15.5-25.4-22.3-27.5-18.9zm58 174c0 3-31.3 27.8-41.5 33-3 1.5-8.2 3.5-11.4 4.5-13.1 3.7-21.8 10.1-26.5 19.4-2.4 4.5-3.8 5.8-5.3 4.3-2.5-2.5 8.6-17 16.8-21.8 2.3-1.4 8.8-4 14.4-5.8 12.8-4.3 27.6-14.2 47.5-32 4-3.5 6-4.1 6-1.6zm-3.1 14.6c4.7 1.8-2 8-29.2 26.5-11.1 7.6-11.6 8.1-14.9 14.9-4.6 9.4-8.3 11.9-19 12.9-7 .6-8.5 1.1-13 4.4-5.6 4.1-6.5 4.4-8.3 2.2-1-1.2-.7-1.9 1.6-4 1.6-1.5 4.1-3.4 5.6-4.3 1.5-.9 3.3-3 4-4.6 3.2-7.8 13-14.8 25.3-18 6.4-1.7 14.1-6.5 34-21.5 6.6-5 12.1-9.1 12.2-9.1.1 0 .8.3 1.7.6z"></path>
                  <path d="M273.2 175.2c-5 36.6-15.3 69-27.4 86.6-3.6 5.3-7.9 15.5-8 19.1-.1 1.5 2.1 7.6 4.7 13.6 9.6 22.1 11.2 29.3 7.6 35.1-2.1 3.4-7.4 7.8-10.6 8.8-1.4.4-2.7 2.7-4.3 7.3-3.5 10.1-12.2 27.8-17.6 36.1-2.7 4-7.7 10.4-11.1 14.1-12.1 13.2-24.6 41-41.6 92.1l-5.8 17.5 17.7.3c9.7.1 18.1.1 18.8-.2.6-.2 1.4-4.6 1.8-10.8 2.3-35.4 11.5-71.4 22.3-87.1 6.9-10 37.7-27.5 72.3-41.2 36.2-14.2 73.2-23.6 111-28.1 15.8-1.8 55.2-2.5 67.7-1.1l7.2.8-1.1-3.2c-2.2-6.4-11.5-23.6-18.1-33.6-27-40.9-69.6-79.1-125.2-112.3-11.7-7-55.8-30-57.5-30-.3 0-1.6 7.3-2.8 16.2zm28.8 23.4c54.2 30 97.6 68.3 126.6 111.9 4 6.1 7.4 11.5 7.4 11.8 0 .4-3.4.7-7.5.7h-7.4l-5-7.3c-26.3-39-68.4-75.9-119.1-104.6-6.9-3.8-13-7.4-13.6-7.8-1.5-1 .4-13.3 2-13.3.6 0 8.1 3.9 16.6 8.6zm-11.5 31.7c34.3 22.8 63.8 50.8 89.8 85.4 4.2 5.6 7.7 10.4 7.7 10.6 0 .3-3.2 1.1-7.1 1.7-6.9 1.2-7.1 1.2-8.7-1.1-4.1-5.9-16.2-20.4-25.5-30.7-17.3-19.2-41.7-40.1-63.6-54.7l-9.9-6.6 2.1-6.4c2.4-7.4 1.1-7.6 15.2 1.8zm-11.9 36.4c14.8 12.3 34.8 32 45.1 44.3 8.1 9.8 18.5 24.1 17.9 24.7-.2.2-3.1 1.2-6.5 2.3l-6 1.8-6.6-8.8c-13.4-18-35.4-40.3-56.4-57.3l-7.8-6.3 3.1-5.7c1.7-3.1 3.4-5.7 3.7-5.7.3 0 6.4 4.8 13.5 10.7zm-5.6 50.5c8.2 12.2 19.5 33.7 18.2 34.8-.9.8-11.5 5.1-11.7 4.8 0-.2-1-2.3-2-4.7-1.1-2.4-4.3-8.7-7.2-13.9-4.8-8.7-5.3-10.2-5.3-15.8 0-4.3-.9-9-3-15.1l-2.9-8.8 2.9 3.5c1.7 1.9 6.6 8.8 11 15.2zm-20.6 38.5c1.1 13.6 1.4 12.8-5.7 16.8-3.5 1.9-6.7 3.5-7 3.5-1.6 0-.5-5.2 2.7-12.6 1.9-4.3 4.1-9.6 5-11.7 2.5-6.1 4.2-4.8 5 4z"></path>
                  <path d="M442.4 354.8c-.6.4-2.3 4.5-3.7 9.2-11.4 37.3-41.5 70.3-83.3 91.3-33.7 16.9-69.6 25.6-128.9 31.3l-5.1.5.8 9.6c.4 5.3.9 9.7 1 9.9.8.7 22.9 3.4 33.3 3.9 29.8 1.7 68.8-4.9 98.2-16.6 38.7-15.3 78.3-45 99.6-74.6 13.9-19.4 23.7-44.8 23.7-61.4V354h-17.2c-9.5 0-17.8.4-18.4.8z"></path>
                  <path d="M414.5 356.8c-7.5.7-33 4.5-42 6.3-46.6 9.3-85.6 24.5-117.3 45.6-14.9 9.9-20.8 15.8-25.5 25.4-4.1 8.3-7.7 21.1-7.7 27.1v3.8h4.8c13 0 47.6-5.3 68.2-10.5 24.4-6.1 49.1-16.1 65.9-26.6 24.5-15.4 43.6-36.6 53.3-59.1 4.5-10.5 4.6-12.4.3-12z"></path>
                </g>
              </svg>
            </a>
          </div>
          <h1>Nextbox</h1>
          <h2>Kemet UI</h2>
        </div>
        <div className={"grid"}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={"card"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={"card"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={"card"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={"card"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};