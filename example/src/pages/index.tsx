import React, {useState} from 'react';
import {CountrySelector} from '../components/selector';
import {COUNTRIES} from '../lib/countries';
import {SelectMenuOption} from '../lib/types';

export default function Home() {
  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState<SelectMenuOption['value']>('BE');

  return (
    <div className={'w-screen h-screen flex flex-col justify-center items-center'}>
      <div className={'w-96 px-5 mt-auto'}>
        <label className="block text-sm font-medium text-gray-700">
          Select a country
        </label>
        <CountrySelector
          id={'countries'}
          ref={myRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={setCountry}
          selectedValue={COUNTRIES.find(option => option.value === country)}
        />
      </div>
      <footer className={'mt-auto pb-2'}>
        <a className={'text-gray-500 hover:text-gray-800 cursor-pointer transition mx-2'} href={'https://github.com/driaug/react-country-selector'} target={'_blank'}>Github</a>
        <a className={'text-gray-500 hover:text-gray-800 cursor-pointer transition mx-2'} href={'https://twitter.com/driaug_'} target={'_blank'}>Twitter</a>
      </footer>
    </div>
  );
}
