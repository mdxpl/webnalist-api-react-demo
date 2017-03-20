import React, {Component} from 'react';

export const Money = ({value}) => {

    value = parseInt(value);
    let currency = '';
    const lastDigit = parseInt(value.toString().substr(-1));

    if (value === 0) {
        currency = 'Bezpłatny';
    } else if (value === 1) {
        currency = 'grosz';
    } else if (lastDigit > 1 && lastDigit < 5) {
        currency = 'grosze';
    } else {
        currency = 'groszy';
    }

    const result = value + (value === 0 ? '' : '&nbsp;') + currency;

    //result is safe due to input is parsed to integer
    return (
        <span className="grosze"
              dangerouslySetInnerHTML={{__html: result}}
        />
    );

};
