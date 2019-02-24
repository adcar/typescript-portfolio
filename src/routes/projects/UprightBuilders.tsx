import * as React from "react";

import ImageBanner from "../../components/ImageBanner";
import PageLabel from "../../components/PageLabel";

import uprightBuildersBanner from "../../img/banners/uprightBuilders.png";

interface IProps {
  banner: string;
  content: string;
  title: string;
}
class UprightBuilders extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <PageLabel title="Upright Builders" />
        <ImageBanner title="yay" image={uprightBuildersBanner} />
      </div>
    );
  }
}

export default UprightBuilders;
