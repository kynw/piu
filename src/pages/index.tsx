import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

type Category = {
  name: string;
};

type Categories = Array<Category>;

export default function Home() {
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

  const [categories, setCategory] = useState<Array<Category>>([
    {
      name: "账户",
    },
  ]);

  console.log(categories);

  return (
    <>
      <Head>
        <title>Piu</title>
      </Head>
      <div>
        <div className="max-w-[20rem] border-r">
          <div className="min-h-screen bg-white">
            <div className="py-2 px-3">
              <div className="flex justify-between">
                <h1>密码类型</h1>
                <a
                  onClick={() => setShowCategoryModal(!showCategoryModal)}
                  className="text-blue-700"
                  role="button"
                >
                  新建类别
                </a>
              </div>
            </div>

            {categories &&
              categories.map(({ name }, key) => {
                return (
                  <div key={key}>
                    <a href="">{name}</a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {showCategoryModal && (
        <>
          <div className="fixed min-h-screen min-w-full bg-opacity-20 animate-pulse bg-gray-700 top-0"></div>
        </>
      )}
    </>
  );
}
