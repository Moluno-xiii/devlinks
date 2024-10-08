'use client';
import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@nextui-org/react';
import AddLink from './AddLink';
import UserLinks from './UserLinks';
import { ToastContainer } from 'react-toastify';

type Props = {};

const LinksComponent = (props: Props) => {
  const [showAddLink, setShowAddLink] = useState(false);
  function closeAddLinkSection() {
    setShowAddLink(false);
  }
  return (
    <div className="flex items-center justify-center">
      <ToastContainer />
      <main className="flex w-[343px] flex-col items-center justify-center rounded-xl bg-white p-6 md:w-[721px]">
        <section className="flex flex-col gap-y-2 md:w-full">
          <p className="text-2xl font-bold md:text-3xl">Customize your links</p>
          <span className="mb-10 text-base text-grey">
            Here, you can add, edit, or remove links to your various online
            profiles. Once set up, you’ll be able to share all your profiles
            with the world!
          </span>
        </section>
        <Button
          variant="solid"
          // isDisabled={!user.emailVerification}
          color="primary"
          className="w-[295px] md:w-full"
          startContent={<IoMdAdd />}
          onClick={() => setShowAddLink(true)}
        >
          Add Link
        </Button>
        {showAddLink && (
          <>
            <AddLink closeAddLinkSection={closeAddLinkSection} />
            <div className="my-5 md:mt-10 max-md:mt-12 flex w-full flex-row items-center justify-between md:px-10">
              <Button
                variant="ghost"
                color="danger"
                aria-label="close link modal button"
                size="sm"
                onClick={closeAddLinkSection}
              >
                close
              </Button>

              <Button
                variant="ghost"
                color="primary"
                aria-label="save link button"
                size="sm"
              >
                Save
              </Button>
            </div>
          </>
        )}
        <UserLinks />
      </main>
    </div>
  );
};

export default LinksComponent;
