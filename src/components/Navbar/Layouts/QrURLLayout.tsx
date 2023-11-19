import React from "react";
import DividerLayout from "../../Layouts/DividerLayout";
import QrExportForm from "../../QrExportForm";
import TextForm from "../../TextForm";

type Props = {};

const QrURLLayout = (props: Props) => {
  return (
    <DividerLayout>
      <div>
        <TextForm />
      </div>
      <QrExportForm />
    </DividerLayout>
  );
};

export default QrURLLayout;
