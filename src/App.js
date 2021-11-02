import React, { Suspense } from "react";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Home />
      </Layout>
    </Suspense>
  );
}

export default App;
