import './sidebar.module.css';
import { HiInformationCircle } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react';
/* eslint-disable-next-line */

type Duration = {
  Label: string,
  value: number
};

export interface SidebarProps {
  duration: Duration[]
};

export function Sidebar(props: SidebarProps) {

  const [, setPlaceHolder] = useState<string>('');
  const [clipboardText, setClipboardText] = useState<string>('');
  const [duration, setDuration] = useState<number>(0);

const handleDurationChange = (e: string) => {
  const durationInMinutes = parseInt(e);
  setDuration(durationInMinutes);
};

  return (
    <div className='w-full h-full'>
      <div className="object-none object-left bg-slate-50 pt-10 w-60 h-full pr-5 pl-5">
        <div>
          <button className="float-right h-10 px-1.5 text-red-100 transition-colors text-xl duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-800">
            <AiOutlineClose size={30} />
          </button>
        </div>

        <div className='mt-20 flex flex-col'>
          <label
            className='font-bold ml-1'
            htmlFor='duration'
          >
            Duration
          </label>
          <select
            className='w-20 mt-2 bg-white rounded-sm'
            name="duration"
            id="duration"
            onChange={((e) => handleDurationChange(e.target.value))}
          >
            {props.duration ? props.duration.map((meetingDuration, i) => {
              return (
                <option
                  key={i}
                  value={meetingDuration.value}
                >
                  {meetingDuration.Label}
                </option>)
            }) : null}
          </select>

          <div className='mt-5 flex flex-row'>
            <label
              className='font-bold ml-1'
              htmlFor='event-type'>
              Event Type
            </label>
            <p className='mt-1 ml-3 text-blue-500'>
              <HiInformationCircle />
            </p>
          </div>
          <select
            className='w-50 bg-white mt-2 rounded-sm'
            name="event-type"
            id="event-type">
            <option value="30 mins">
              Share slots
            </option>
          </select>

          <div>
            <div className='mt-5 flex flex-row'>
              <label
                className='font-bold ml-1'
                htmlFor='save-placeholders'
              >
                Save Placeholders
              </label>
              <input
                className={'ml-7 w-5 h-[20px] mt-[3px] accent-blue-500'}
                name='Save'
                onClick={((event) => { console.log("Placeholder will be saved.")})}
                type={'checkbox'}>
              </input>
            </div >
            <input
              type="text"
              name='name-placeholders'
              id='name-placeholders'
              placeholder='Type placeholder name here'
              className='p-[10px] mt-3 w-[200px] h-[45px] text-sm border rounded-lg border-slate-300 placeholder:text-sm'
              onChange={((e) => setPlaceHolder(e.target.value))}
            >
            </input>
          </div>

          <textarea
            name='clipboard'
            id='clipboard'
            onChange={((e) => setClipboardText(e.target.value))}
            placeholder='Start selecting availabilities you would like to share on the calendar'
            className='mt-5 p-[10px] h-40 text-sm border rounded-md border-slate-300 break-normal'>
          </textarea>

          <button
            onClick={(() => navigator.clipboard.writeText(clipboardText))}
            className='focus:shadow-outline hover:bg-blue-200 mb-[10px] text-blue-500 font-bold pt-2 pb-2 mt-5 border rounded-lg border-blue-500'
          >
            Copy to Clipboard
          </button>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
