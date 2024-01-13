import { cn } from '@/lib/clientUtils';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { VariantProps, cva } from 'class-variance-authority';
import { Fragment, InputHTMLAttributes, useState } from 'react';

export interface IComboBoxData {
  id: string;
  name: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  createNew: string;
  data: IComboBoxData[];
  selected: IComboBoxData[];
  setSelected: (value: IComboBoxData[]) => void;
}

const MultiBox = ({
  label,
  createNew,
  data,
  selected,
  setSelected,
}: InputProps) => {
  const [query, setQuery] = useState('');
  const filteredItems =
    query === ''
      ? data
      : data.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <label className="flex flex-col">
      <span className="block mb-1 text-xs font-medium text-neutral-400">
        {label}
      </span>
      <Combobox value={selected} onChange={setSelected} multiple>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default rounded-lgtext-left sm:text-sm">
            <Combobox.Input
              className="w-full border rounded-lg p-3 border-neutral-400 text-sm focus-visible:outline-brand-purple-normal"
              displayValue={(item: IComboBoxData) => item && item.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-100 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 && query !== '' ? (
                <Combobox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-3 pl-10 pr-4 ${
                      active
                        ? 'bg-brand-purple-normal text-white'
                        : 'text-gray-900'
                    }`
                  }
                  value={{ id: null, name: query }}
                >
                  {createNew}: {query}
                </Combobox.Option>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-3 pl-10 pr-4 ${
                        active
                          ? 'bg-brand-purple-normal text-white'
                          : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-brand-purple-normal'
                            }`}
                          >
                            <CheckIcon className="h-6 w-6" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </label>
  );
};

export default MultiBox;
