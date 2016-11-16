import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as FeedActions from 'actions/Feeds'

@connect()
class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 text-left">
                            <em>
                                Winds was built by <a href="https://getstream.io" target="_blank">Stream</a>
                                &nbsp;|&nbsp;
                                Powered with <a href="https://getstream.io/docs_analytics/#introductionp" target="_blank">Personalization</a>
                                &nbsp;|&nbsp;
                                100% Open Source on <a href="https://github.com/GetStream/Winds" target="_blank">Github</a>
                            </em>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-right">
                            <a href="https://github.com/GetStream/Winds" target="_blank">
                                <svg width="17px" height="16px" viewBox="1119 1 17 16">
                                    <path d="M1119,9.00204043 C1119,12.5370404 1121.292,15.5350404 1124.471,16.5930404 C1124.871,16.6670404 1125.018,16.4190404 1125.018,16.2080404 C1125.018,16.0170404 1125.01,15.3870404 1125.007,14.7190404 C1122.781,15.2030404 1122.312,13.7750404 1122.312,13.7750404 C1121.948,12.8500404 1121.424,12.6040404 1121.424,12.6040404 C1120.698,12.1070404 1121.479,12.1180404 1121.479,12.1180404 C1122.282,12.1740404 1122.705,12.9420404 1122.705,12.9420404 C1123.419,14.1650404 1124.577,13.8110404 1125.033,13.6070404 C1125.105,13.0900404 1125.312,12.7370404 1125.541,12.5370404 C1123.764,12.3350404 1121.896,11.6490404 1121.896,8.58304043 C1121.896,7.71004043 1122.209,6.99604043 1122.72,6.43604043 C1122.637,6.23404043 1122.363,5.42104043 1122.797,4.31904043 C1122.797,4.31904043 1123.469,4.10404043 1124.998,5.13904043 C1125.636,4.96204043 1126.32,4.87304043 1127,4.87004043 C1127.68,4.87304043 1128.365,4.96204043 1129.004,5.13904043 C1130.531,4.10404043 1131.202,4.31904043 1131.202,4.31904043 C1131.637,5.42104043 1131.364,6.23504043 1131.281,6.43604043 C1131.794,6.99604043 1132.104,7.71004043 1132.104,8.58304043 C1132.104,11.6560404 1130.232,12.3320404 1128.451,12.5300404 C1128.738,12.7780404 1128.994,13.2650404 1128.994,14.0110404 C1128.994,15.0810404 1128.985,15.9430404 1128.985,16.2060404 C1128.985,16.4190404 1129.129,16.6680404 1129.535,16.5900404 C1132.712,15.5310404 1135.001,12.5330404 1135.001,9.00004043 C1135.001,4.58204043 1131.419,1.00004043 1127.001,1.00004043 C1122.582,1.00204043 1119,4.58404043 1119,9.00204043 Z" id="github" stroke="none" fill="#99A9B3" fillRule="evenodd"></path>
                                </svg>
                            </a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://twitter.com/getstream_io" target="_blank">
                                <svg width="16px" height="14px" viewBox="1155 2 16 14">
                                    <path d="M1169.111,4.056 C1169.789,3.65 1170.309,3.006 1170.554,2.24 C1169.92,2.616 1169.217,2.889 1168.469,3.037 C1167.87,2.399 1167.017,2 1166.073,2 C1164.26,2 1162.79,3.47 1162.79,5.282 C1162.79,5.539 1162.819,5.79 1162.875,6.03 C1160.147,5.893 1157.728,4.586 1156.109,2.599 C1155.826,3.085 1155.665,3.649 1155.665,4.25 C1155.665,5.389 1156.423,6.393 1157.304,6.982 C1156.766,6.965 1155.996,6.817 1155.996,6.571 L1155.996,6.612 C1155.996,8.202 1156.95,9.529 1158.451,9.831 C1158.175,9.906 1157.796,9.946 1157.496,9.946 C1157.284,9.946 1157.034,9.925 1156.833,9.887 C1157.251,11.191 1158.44,12.14 1159.877,12.167 C1158.754,13.047 1157.327,13.572 1155.788,13.572 C1155.523,13.572 1155.256,13.556 1155,13.526 C1156.453,14.457 1158.175,15.001 1160.029,15.001 C1166.067,15.001 1169.367,9.999 1169.367,5.661 C1169.367,5.518 1169.364,5.377 1169.357,5.236 C1169.999,4.773 1170.554,4.195 1170.994,3.537 C1170.407,3.8 1169.775,3.976 1169.111,4.056 Z" id="twitter" stroke="none" fill="#99A9B3" fillRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

require('./styles.scss')

export default Footer
