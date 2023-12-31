import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ChangeScheduleDialog({
  show,
  onClose,
  onAddNew,
  onChangeDate,
}) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between"
                >
                  <div className="text-[#171717] text-[24px] font-medium">
                    Date Selection
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="43"
                    viewBox="0 0 44 43"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.29495 31.0339C3.29495 33.5371 5.13995 35.6109 7.51874 35.9274C7.8555 34.5303 8.56842 33.2788 9.53928 32.2928C10.9221 30.8884 12.8316 30.0188 14.9453 30.0188C15.4684 30.0188 15.8947 30.4518 15.8947 30.983C15.8947 31.5142 15.4684 31.9471 14.9453 31.9471C14.8737 31.9471 14.8056 31.9471 14.7375 31.9508C15.3358 32.6893 15.9018 33.8136 15.8589 35.4072C15.8445 35.9384 15.4075 36.3568 14.888 36.3422C14.3649 36.3277 13.953 35.8838 13.9673 35.3562C14.0246 33.2824 12.5486 32.5256 12.545 32.522C12.5307 32.5147 12.5199 32.5074 12.5056 32.5002C11.9002 32.7876 11.352 33.1842 10.8863 33.6571C9.84738 34.7122 9.20253 36.1712 9.20253 37.783C9.20253 38.0813 9.22402 38.3724 9.26701 38.6562C10.3239 40.7773 12.4913 42.2363 14.9883 42.2363C17.3743 42.2363 19.5453 40.901 20.6559 38.7508L20.7311 38.6052V24.1721C20.6308 24.1066 20.5412 24.0265 20.4624 23.921L20.4409 23.8955C19.4951 22.5166 18.0908 21.658 16.5861 21.3851C16.3891 21.3487 16.192 21.3233 15.9914 21.3087C15.5902 21.7453 15.2068 22.2401 14.931 22.7749C14.6551 23.3098 14.4975 23.8773 14.5727 24.4376C14.6444 24.987 14.2646 25.4891 13.7273 25.5655C13.1863 25.6383 12.6919 25.2563 12.6167 24.7069C12.4805 23.6809 12.7277 22.7167 13.1755 21.8508C13.1899 21.8217 13.2042 21.7926 13.2185 21.7671C12.8352 21.9309 12.4626 22.1382 12.108 22.3893V22.3856C11.6745 22.6913 11.0762 22.5967 10.7573 22.1637C10.4313 21.7235 10.5173 21.094 10.9544 20.763L10.983 20.7411C12.7851 19.4677 14.9274 19.0566 16.9336 19.4204C18.3165 19.6715 19.6348 20.29 20.7311 21.2505V3.35362C20.6809 3.29541 20.6379 3.22992 20.6021 3.16079L20.5914 3.1426C19.9537 1.77459 18.8324 0.795886 17.5355 0.322905C16.2386 -0.150076 14.759 -0.120969 13.412 0.526651C12.065 1.17427 11.1013 2.31306 10.6355 3.63013C10.1698 4.9472 10.1985 6.44983 10.8362 7.81783C11.0439 8.26898 10.8541 8.80745 10.4098 9.02211C9.9656 9.23314 9.43539 9.04031 9.22402 8.58915C8.7368 7.54132 8.51827 6.43163 8.53976 5.34742C5.34773 5.71125 2.85788 8.47273 2.85788 11.8091C2.85788 12.3439 2.92236 12.8787 3.05133 13.3954C3.9183 13.2607 4.8211 13.3008 5.7239 13.5336C7.37544 13.9666 8.86577 15.0399 9.80081 16.6517C10.0337 17.0519 9.90112 17.5649 9.51062 17.8014C9.11655 18.0379 8.61141 17.9032 8.37855 17.5067C7.08884 15.2873 4.43777 14.4177 2.11271 15.4037C0.762101 16.9063 -0.000976562 18.8783 -0.000976562 20.974C-0.000976562 24.0011 1.61116 26.7553 4.17266 28.2106C3.60663 29.0328 3.29853 30.0079 3.29853 31.0339H3.29495Z"
                      fill="#41C1BA"
                    />
                    <path
                      d="M31.9952 19.5448L31.9462 19.4951L31.7581 19.6269C31.9078 19.0375 31.9603 18.4122 31.8738 17.7602L31.8734 17.7577C31.7618 16.9479 31.0236 16.3611 30.2009 16.4718L30.1976 16.4723C29.3786 16.5879 28.82 17.3455 28.9262 18.1599L28.9265 18.1618C28.9833 18.5853 28.8678 19.0471 28.6194 19.5287C28.4066 19.9413 28.118 20.3386 27.8004 20.7023C27.6998 20.69 27.5997 20.6746 27.4994 20.6561L27.4979 20.6558C26.1211 20.4061 24.8346 19.6206 23.9662 18.3545L23.9506 18.3318L23.9327 18.311L23.9211 18.2975C23.873 18.2325 23.8205 18.1721 23.7637 18.1169V4.0456L23.7831 4.00808L23.7831 4.00792C24.8095 2.02082 26.8109 0.792969 29.0065 0.792969C31.2716 0.792969 33.2511 2.10239 34.2409 4.02557C34.2726 4.25926 34.2887 4.49942 34.2887 4.74626C34.2887 6.22233 33.6986 7.55652 32.7486 8.5213C32.3866 8.88889 31.97 9.20374 31.5128 9.45336C31.4017 9.36944 31.2511 9.23805 31.1013 9.05244C30.8049 8.68517 30.4987 8.09135 30.5237 7.18683L30.5237 7.1866C30.5453 6.39041 29.9233 5.70971 29.1172 5.68723C29.1172 5.68723 29.1171 5.68723 29.1171 5.68723L31.9952 19.5448ZM31.9952 19.5448C32.5841 19.3524 33.2535 19.547 33.6432 20.0758C34.1295 20.733 34.0043 21.673 33.3464 22.1717C33.3462 22.1719 33.346 22.172 33.3459 22.1721L33.3183 22.1932L33.3112 22.1986L33.3039 22.2037C31.3881 23.5575 29.1087 23.9949 26.9755 23.6081L26.9754 23.6081C25.8397 23.4019 24.7444 22.9624 23.7673 22.3019V39.0195C23.7911 39.0567 23.8131 39.0944 23.8331 39.1323L23.8375 39.1396L23.8499 39.1606L23.8602 39.1827C24.4406 40.4278 25.4589 41.3153 26.6342 41.7439C27.8097 42.1726 29.1491 42.1461 30.3697 41.5592C31.592 40.9716 32.4676 39.9381 32.8914 38.7397C33.3154 37.5407 33.289 36.1741 32.709 34.9299C32.3839 34.2348 32.6731 33.3982 33.3732 33.0668C34.0764 32.7285 34.9021 33.0452 35.2271 33.7389L35.2277 33.7402C35.6591 34.6679 35.8933 35.6413 35.9476 36.6071C38.6185 36.0393 40.6405 33.6225 40.6405 30.7311C40.6405 30.3836 40.611 30.0365 40.5524 29.6957C39.7646 29.7637 38.956 29.6987 38.1496 29.4907L38.1477 29.4902C36.3712 29.0245 34.7692 27.87 33.7654 26.1436C33.3957 25.5082 33.6044 24.6928 34.2287 24.3148L34.2304 24.3137C34.8684 23.9309 35.6806 24.1532 36.051 24.784L36.0521 24.7859C37.1963 26.7549 39.5202 27.5416 41.588 26.7218C42.8062 25.3221 43.4993 23.5036 43.4993 21.5698C43.4993 18.721 41.9824 16.1336 39.5787 14.768L39.1048 14.4987L39.4138 14.0497C39.9219 13.3117 40.1962 12.4356 40.1962 11.5099V11.4953C40.1962 9.39392 38.753 7.63559 36.8341 7.17679C36.4396 8.47962 35.7341 9.64698 34.8082 10.5873C33.3361 12.0823 31.3001 13.0104 29.0459 13.0104C28.2394 13.0104 27.5965 12.3463 27.5965 11.5463C27.5965 10.9749 27.9244 10.4729 28.4056 10.2326L31.9952 19.5448Z"
                      fill="#F7F7F7"
                      stroke="#D6D6D6"
                    />
                  </svg>
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-[#474747]">
                    Would you Like to create an additional interview day, change
                    their current interview day, or cancel
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-6 text-[18px] font-semibold">
                  <button
                    className="rounded-md w-full py-4 text-white"
                    style={{
                      background:
                        "linear-gradient(97deg, #41C1BA 0%, #596173 133.3%)",
                    }}
                    onClick={onAddNew}
                  >
                    Create additional Date
                  </button>
                  <button
                    className="rounded-md w-full py-4 text-secondary border border-secondary"
                    onClick={onChangeDate}
                  >
                    Change Current Date
                  </button>
                  <button
                    className="rounded-md w-full py-4 border"
                    style={{
                      color: "rgba(210, 31, 31, 0.81)",
                      borderColor: "rgba(210, 31, 31, 0.81)",
                    }}
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <div className="flex gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M12.75 17.0366V11.0366H9.75V12.5366H11.25V17.0366H9V18.5366H15V17.0366H12.75ZM12 6.53662C11.7775 6.53662 11.56 6.6026 11.375 6.72622C11.19 6.84983 11.0458 7.02554 10.9606 7.2311C10.8755 7.43667 10.8532 7.66287 10.8966 7.8811C10.94 8.09933 11.0472 8.29978 11.2045 8.45712C11.3618 8.61445 11.5623 8.7216 11.7805 8.765C11.9988 8.80841 12.225 8.78613 12.4305 8.70099C12.6361 8.61584 12.8118 8.47164 12.9354 8.28664C13.059 8.10163 13.125 7.88413 13.125 7.66162C13.125 7.36325 13.0065 7.0771 12.7955 6.86613C12.5845 6.65515 12.2984 6.53662 12 6.53662Z"
                          fill="#596173"
                        />
                        <path
                          d="M12 23.0366C9.9233 23.0366 7.89323 22.4208 6.16652 21.2671C4.4398 20.1133 3.09399 18.4734 2.29927 16.5548C1.50455 14.6362 1.29661 12.525 1.70176 10.4882C2.1069 8.45138 3.10693 6.58046 4.57538 5.112C6.04383 3.64355 7.91476 2.64353 9.95156 2.23838C11.9884 1.83324 14.0996 2.04117 16.0182 2.83589C17.9368 3.63061 19.5767 4.97642 20.7304 6.70314C21.8842 8.42985 22.5 10.4599 22.5 12.5366C22.5 15.3214 21.3938 17.9921 19.4246 19.9612C17.4555 21.9304 14.7848 23.0366 12 23.0366ZM12 3.53663C10.22 3.53663 8.47992 4.06447 6.99987 5.0534C5.51983 6.04233 4.36628 7.44794 3.68509 9.09247C3.0039 10.737 2.82567 12.5466 3.17294 14.2924C3.5202 16.0383 4.37737 17.6419 5.63604 18.9006C6.89472 20.1593 8.49836 21.0164 10.2442 21.3637C11.99 21.711 13.7996 21.5327 15.4442 20.8515C17.0887 20.1704 18.4943 19.0168 19.4832 17.5368C20.4722 16.0567 21 14.3167 21 12.5366C21 10.1497 20.0518 7.86049 18.364 6.17266C16.6761 4.48484 14.387 3.53663 12 3.53663Z"
                          fill="#596173"
                        />
                      </svg>
                    </div>
                    <div className="text-[#757575] text-[13px] font-normal">
                      By Creating additional Date, Your current Progress will be
                      Archived, you may edit that later. By Changing Current
                      your progress will be shifted to new Date. Press cancel to
                      go back and continue.
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
