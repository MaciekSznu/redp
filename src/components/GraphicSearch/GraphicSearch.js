import React from "react";
import styles from "./GraphicSearch.module.scss";
import ImageMapper from "react-image-mapper";
import MapImage from "../../assets/images/home_model_1520_1080.jpg";
import flatsArray from '../../assets/flatsArray';

const MAP = {
  name: "building-map",
  areas: [
    {
      flatNumber: "1",
      staus: "for sale",
      flatArea: "67",
      floor: "0",
      shape: "poly",
      coords: [176,968,178,814,456,808,456,969],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "2",
      staus: "for sale",
      flatArea: "45",
      floor: "0",
      shape: "poly",
      coords: [456,808,686,803,873,799,934,797,1029,803,1029,969,875,974,456,969],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "3",
      staus: "for sale",
      flatArea: "45",
      floor: "0",
      shape: "poly",
      coords: [1105,969,1295,968,1295,822,1253,818,1182,812,1105,808],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "4",
      staus: "for sale",
      flatArea: "67",
      floor: "1",
      shape: "poly",
      coords: [456,808,456,650,178,666,178,813],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "5",
      staus: "for sale",
      flatArea: "50",
      floor: "1",
      shape: "poly",
      coords: [454,649,688,632,870,620,934,615,1182,652,1182,812,1129,810,1027,805,934,796,871,798,457,808],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "6",
      staus: "for sale",
      flatArea: "50",
      floor: "1",
      shape: "poly",
      coords: [1180,811,1295,823,1295,670,1253,667,1182,653],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "7",
      staus: "for sale",
      flatArea: "67",
      floor: "2",
      shape: "poly",
      coords: [178,667,178,523,347,508,454,501,454,648],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "8",
      staus: "for sale",
      flatArea: "50",
      floor: "2",
      shape: "poly",
      coords: [452,650,452,501,871,472,983,474,1080,466,1180,491,1180,652,937,615],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "9",
      staus: "for sale",
      flatArea: "50",
      floor: "2",
      shape: "poly",
      coords: [1178,650,1248,667,1294,669,1294,514,1178,491],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "10",
      staus: "for sale",
      flatArea: "87",
      floor: "3",
      shape: "poly",
      coords: [600,489,598,404,654,334,761,198,344,261,245,363,205,367,208,406,144,473,178,475,178,522],
      lineWidth: 0,
      fillColor: "rgba(#d8d8d8, .15)",
      strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
    {
      flatNumber: "11",
      staus: "for sale",
      flatArea: "78",
      floor: "3",
      shape: "poly",
      coords: [598,489,875,472,983,474,1078,467,1314,521,1319,509,1314,497,1312,467,1299,460,1255,363,1273,360,1273,299,1221,277,1192,216,1039,155,761,196,598,402],
      lineWidth: 0,
      // fillColor: "rgba(#d8d8d8, .15)",
      // strokeColor: "rgba(#d8d8d8, .15)",
      url: "https://www.gazeta.pl",
    },
  ]
};

const URL = MapImage;
class GraphicSearch extends React.Component {

  state = {
    baseImageWidth: 1520,
    baseImageHeight: 1080,
    width: window.innerWidth,
    imageWidth: null,
    imageHeight: null,
    hoveredArea: null,
    clickedArea: null,
    fillColor: null,
    src: URL,
    map: MAP,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const heightToWidthRatio = this.state.baseImageHeight / this.state.baseImageWidth;
    this.setState({width: 1042});
    if (window.innerWidth <= 1042)
      {this.setState({imageWidth: this.state.width, imageHeight: (this.state.width * heightToWidthRatio)})}
    else {this.setState({imageWidth: 1042, imageHeight: (this.state.imageWidth * heightToWidthRatio)})};
  }

  enterArea(area) {
    this.setState({ hoveredArea: area, });
  }

  getFillColor(area) {
    let fillColor;
    if (area.status === "for sale") {
      fillColor = "rgba(86, 146, 138, 0.6)";
    }
    else if (area.status === "reserved") {
      fillColor = "rgba(248, 206, 129, 0.6)";
    }
    else {
      fillColor = "rgba(224, 119, 125, 0.6)"
    }
    return fillColor;
  }

  leaveArea(area) {
    this.setState({ hoveredArea: null });
  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  clickedArea(area) {
    this.setState({ clickedArea: area.flatNumber - 1 });
  }

  render() {
    const selectedFlatNumber = this.state.clickedArea;
    const flats = flatsArray;
    const selectedFlat = flats[selectedFlatNumber];

    return (
      <>
        <div className={styles.imageWrapper}>

          <ImageMapper
            src={this.state.src} map={this.state.map}
            width={this.state.imageWidth}
            imgWidth={this.state.baseImageWidth}
            height={this.state.imageHeight}
            onMouseEnter={area => this.enterArea(area)}
            onMouseLeave={area => this.leaveArea(area)}
            onClick={area => this.clickedArea(area)}
          />

          {
            this.state.hoveredArea &&
            <div className={styles.toolTip}
                style={{ ...this.getTipPosition(this.state.hoveredArea)}}>mieszkanie <br></br> nr&nbsp;
              { this.state.hoveredArea && this.state.hoveredArea.flatNumber}
            </div>
          }

        </div>
        
        {/* { !selectedFlat ?
        <div className={styles.welcomeText}>
          <h2>wybierz mieszkanie z wizualizacji lub użyj wyszukiwarki</h2>
        </div> :
        <div className={styles.flatDescription}>
          <table className={styles.flatTable}>
          <tbody>
              <tr className={styles.flatTableHeader}>
                <th>MIESZKANIE</th>
                <th>POKOJE</th>
                <th>POWIERZCHNIA</th>
                <th>CENA</th>
                <th>STATUS</th>
                <th>KARTA</th>
              </tr>
              <tr className={styles.flatTableData}>
                <td>{selectedFlat.flatNumber}</td>
                <td>{selectedFlat.rooms}</td>
                <td>{selectedFlat.area} m<sup>2</sup></td>
                <td>{selectedFlat.price} zł</td>
                <td>{selectedFlat.status}</td>
                <td>{selectedFlat.chart}</td>
              </tr>
            </tbody>
          </table>
        </div>} */}
      </>
    )
  }
}

export default GraphicSearch;
