import * as React from "react";

import Image from "../atoms/image";
import ParagraphText from "../atoms/paratext";
import BannerImage from "../images/continue-watch.png";

const ContinueWatchList = (props) => {
  type ContinueWatchData = {
    BannerImg: HTMLImageElement,
    className: string,
    Title: string,
    logo: HTMLImageElement,
    EpisodeTitle: string

  }
  return (
    <>
      <div className={props.className}>
        <label>{props.heading}</label>
        <div className="wrapper">
          {props.data &&
            props.data.map(
              (
                items : ContinueWatchData,
                index
              ) => (
                <div key={index} className="banner">
                  <Image
                    imgSrc={items.BannerImg ? items.BannerImg : BannerImage}
                  />
                  <div className="detail">
                    <div>{items.Title}</div>
                    <Image imgSrc={items.logo} />
                    <ParagraphText text={items.EpisodeTitle} />
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};


export default ContinueWatchList;
