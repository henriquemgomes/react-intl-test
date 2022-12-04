import './App.css';
import Clock from './Clock';
import {IntlProvider, FormattedMessage } from 'react-intl'
import React from "react";

let i18nConfig = {
  locale: 'pt'
};

const messages = {
  pt: {
    title: "Contagem Regressiva - Final da Copa do Mundo - UTC",
    date: "Data da final: {ts, date, ::yyyyMMdd}",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    localization_button_pt: "Localização: pt",
    localization_button_en: "Localização: en"
  },
  en: {
    title: "Countdown - World Cup Final - UTC",
    date: "Final date: {ts, date, ::yyyyMMdd}",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    localization_button_pt: "Localization: pt",
    localization_button_en: "Localization: en"
  }
}

const finalDate = "18 Dec 2022 15:00:00 UTC";

function App() {
  const [lang, setLang] = React.useState(i18nConfig.locale)
  return (
    <div className="App">
      <header className="App-header">
        <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
          <p>
            <FormattedMessage
              id="title"
              defaultMessage="Countdown - World Cup Final"
            />
          </p>
          <Clock deadline={finalDate} />
          <p>
            <FormattedMessage
              id="date"
              defaultMessage="Final date: {ts, date, ::yyyyMM}"
              values={{ts: Date.parse(finalDate)}}
            />
          </p>
          <br></br>
          <div className='locale-buttons'>
            <button type="button" onClick={() => {
              setLang('pt')
            }}>
              <FormattedMessage
                id="localization_button_pt"
                defaultMessage="Localization: pt"
              />
            </button>
            <button type="button" onClick={() => {
              setLang('en')
            }}>
              <FormattedMessage
                id="localization_button_en"
                defaultMessage="Localization: en"
              />
            </button>
          </div>
        </IntlProvider>
      </header>
    </div>
  );
}

export default App;
