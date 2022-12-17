import React from "react";
import Layout from "../components/Layout";
import KakaoButton from "react-kakao-button";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <Layout>
      <div>환영 메인 문구</div>
      <div>환영 서브 문구</div>
      <div>Image</div>
      <KakaoButton
        disabled={false} // can also be written as disabled={true} for clarity
        onClick={() => {
          console.log("Kakao button clicked");
        }}
      />
    </Layout>
  );
}
