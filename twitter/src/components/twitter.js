import React, { Component } from "react";
import api from "../services/api";

import "./twitter.css";

export default class Tweet extends Component {

    handleLike = async () => {
        const { _id } = this.props.tweet;

        await api.post(`likes/${_id}`);
    };

    render() {
        const { tweet } = this.props;


        return(
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9KoOw5mus/nOtEnuz5/P4zmOvu9f2CuvHQ5PmRwvLX6Prl8Pyv0fVKoezo8vxZp+2pzvXC3Pj0+f7d7Pt/ufGfyfSOwPJUpe1qru/N4vm62Pdrr++lzPVzsu/H3/ih3DRbAAAEA0lEQVR4nO3c6XKDIBQFYAXUrNbULM3S9v3fsqZp0jSYCETP1c75/jPjHZAjiEYRERERERERERERERERERERERERERERERERERENXFLOpuPdeJklfs2yZdVqOiv9mqFNF6siVj9MMZpP3ZrNR4U+N4uL1XzZ8XUG2q2U0sbEF0ZXlz36bGj2ajUzx2ZjyDV7yNa5urrKq+tV+fv9gVeu47vN1iXw+ptkm7T2Ok+0mtRfbDlJ9YNm6SYD13HXur4fri5Wz2uaLZqaGfUOr6XOOH/QEWeqmN00W745NNOF21zVqcmjAXrdH4s/zRr7/adZuhaq6yzZOvTEifpIrpop92aC5VVTjMtQu/RHfp45MpeBfWlWCE6qmXEaapdrNacoX3o2exMrMdNeV1pJd1Wzz9SzlYmFYiPJfQus7qp9NHe+BX9LzGWeVg8eN9NviQf/AqvU2EoUuA4p8DjkQiiB0NiF9EU4hX8UD+uLcAZdYOAYDafB4/QFO0aPFDYyVugurIbpBlngi29otyFFduIEPc8cmQmuwAQ/Rr9LxFX4ip9njlTTrlZ7VhKDtOrDEaxCmS6sMhFV4FiqQoXatXmXmWiqPqzbsuvCh8xtCLwR34QKjE2BKTCRug1hiSjw1H2WYvaklnIVqtud826IhQUsLsD7F6ywA5KjFPP+W3KmeYFUmAlWiNn7Fkz8HFJgFBVSBZoDqEKhBTBwp2Yutnp6BVUoNpmCptKKVB+iJpooGgntROFeXQg9t6XAE325RIEG+SIY/m7tSO2BFZYSb2Zgu6XfBF7NKNRW4kmJH6a4qDhZoKdTtQNXGBXYcarxB/hm2E7UAmfbAk5vhUvhY/RohJttbo7fwmxRt6LGvRqVKVFgljnzOAP9TIEiBxPPVt1PN0psiJ5Mui5RAU/R1Ft0+xCeYp9Ga3V6uEah9p4eGrt9HBLACJybrTXz+7rAvcAYtrfWxOvDEvcC5b6zsHURjLIxaGs9GNVKuqRbLQejfAzaWg3GPsSgbd9eiWkvYtA2bWmgGt2DL0frtROMxmDOBQUpWwhG0S8qmz0fjHrb7/9GPB2M0qtBF5tnSuxjDNqeCMZ+xqBtH9qL/VgNugg7+WZgR/FbEBKMPVoNuvD6p8CpwH7HoM03GDXqQFeLvIJxCDFo81gxDiMGbc7BOJQYtDmuGIcTgzaXYOzxatBF849aBhaDtqat1MHFoC0pHpU4xBi0Pfg7wTBj0HZ3xTjUGLTdCcbhxqCtdsU45Bi02cE48Bi03a4YTT7wGLRlf/4M9g9i0Ha9YvwfMWgb/fxE0qTQn+kgjQ/fvwr+6Ol/gltRTnfTf3gHEhERERERERERERERERERERERERERERERERHRtS+rKTcmQ3ZAtAAAAABJRU5ErkJggg==" alt="Like" />
                    {tweet.likes}
                </button>
            </li>
        );
    }
}