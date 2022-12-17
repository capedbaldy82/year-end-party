import React from "react";
import Avatar from "../../components/Avatar";
import Divider from "../../components/Divider";
import GuestBookList from "../../components/GuestBookList";
import Layout from "../../components/Layout";
import TextView from "../../components/TextView";

export default function ReportPage() {
  return (
    <Layout>
      <Avatar name="네임" />
      <TextView text="noremisumaskdfjlkasdfjklasjdflkajsdkfjklasdfjklasjdfkljaslkdfjalksdfjklasdjfklasjdfkljskdlasdfkjaslkdfjklasdfj" />
      <Divider />
      <GuestBookList />
    </Layout>
  );
}
