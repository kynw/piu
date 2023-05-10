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

  const [categories, setCategory] = useState<Array<Category>>();

  return (
    <>
      <Head>
        <title>Piu</title>
      </Head>
      <div>
        <div className="max-w-[20rem] border-r">
          <div className="min-h-screen bg-white">
            <div className="pt-16 px-8">
              <div className="flex justify-between">
                <h1>账户类型</h1>
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
          <div className="fixed min-h-screen min-w-full bg-opacity-20 bg-gray-700 top-0"></div>
        </>
      )}
    </>
  );
}
