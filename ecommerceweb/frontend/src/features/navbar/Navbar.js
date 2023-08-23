import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../cart/cartSlice';
import { selectLoggedInUser } from '../auth/authSlice';
import { selectUserInfo } from '../user/userSlice';


const navigation = [
  { name: 'Products', link: '/', user: true },
  { name: 'Products', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },

];
const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/my-orders' },
  { name: 'Sign out', link: '/logout' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar({ children }) {
  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);

  return (
    <>
      {userInfo &&<div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-8 w-8"
                          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ0AAAB6CAMAAABTN34eAAAAwFBMVEX///8AAABnOrdjM7WUecrs7Ozi4uJoaGgSEhKpqanDw8MXFxeMcMbJycmlpaVSUlKTk5P4+Pibm5tXV1ecg8/S0tK6urpuRbokJCSAgIA9PT3v7++IiIgtLS1dKbNhMLXY2NhbJbNGRkaxsbE4ODh3d3dfX1/z8PltQrp+WsFZH7Lb0u0rKyuXl5d6enpDQ0PAsd/PxOeEZMTj3fGwndilj9O5qNzRxuh5Ur+/sN/o4vOgiND18vqok9THuuKIasRZ3I5vAAAKpUlEQVR4nO2daUOjPBDHQaTV1raittpDoLVVn6rrrnur637/b/X0ICHHTDjKEdf8XymEdMgPckwmwbLS6POvn6nSGVWvL+e+M336WrcZRoDunpZ7KznTs5u6TTESdHM2dfa2CvxvXt3mGLH6FgR7sfzbt7oNMqJ6c/w9XtNfd3UbZbTR3X/TPUmOf/Rct2FG1s3R0pHhbLoHf17rNu6D6/W7D7PZdA+Cz3Xb96H1ey9A2WybHzM6rUs/z8XOgFy9Lf+a0Wkdev6rqNQYPv6LaX6q1uvLNA2bbfPzo25rP5h++OoGh5d/+6Vugz+QviQ3OIKMc7QqgaPPJDnLfeMcLV83+6kbHF5BYJyjZetbpgaHl3GOlqvPkrszIx/jHC1NuRocXs70yDQ/ZegZc3dm5LM0ztHi9SeVZyCNgsA0P0Urf2dAkvO37pv551QcnD3nqO6b+eeUsuA/OB13XM/vpin2IEg1VC2cjtffqlFwvpiin+uLx0/atm1PKjKCU4pC989urK9Pyb3uwum49lbXBeeLKfo5Wzg82x4dVWQFq8QyX0aOzi+3SSPW0ug0C84X0wFIZ0igLSoyg1FCifvn8Rz1j4T5bISO1z1ENGg1XJVtWtAZ21RKY0uRsryD4Deb9vVFOThC6DRsleafOqhtWtDpxLZeVWRHLFVpT7+Lw3+lYyEXnbWOkYdSCzqt2M7DiuyIhZc1HFeocMrlprPiA16pBR3GfKkzV7qwosZjct8CpHuwAx37MgSuLJzOyXCjBdJFh3sFj8TGi6LMSC+koG9VAYXfYDy70AEr9cLpRH1jG2nqYDphfa8OTMd5Ul/0XAIdoFYvnE4vDx2r394cHRRlRQbB5byfcNV5Hjo9TrPLtoCnJV6pCZ1Vz+B4Mqhler5COvIp96rH4hGbA23o1KZa6azkDmM6oq/E0Kmbzur8Bdb0GDr107G8uQ0nMXQ0oGN59O3hu9WGjg50rD5JMuMOGzpa0LGuSRrO42bo6EGHjse5qs3Q0YOOdR+lGbIHU9FpDI6vR/PLy3lvctXAhozeRpROKzqwPsYIoQMlBQ57nYfe2o5Z86SVbujq9buLtemjtelgCk3okFHPnD2YTKcxubQ5NSWHw1pXNio2GUIHtp/MLETu9bDJZXsK2sFnwF8xPwYAaULnCkqURKfPeRoitQF36m502uBhjo4nWzIKVfdrtS6kK+xr6RJN6NAZSLZOUNPxmtLtYeVSNp3wAMjZPsFvdww9V7Y8z6UJHZqI7bQp6fSlW4vVFdKWTAczBQ2yGqDmjPgWSxM6NLaCrXxVdPAbBK4ol44LZLsV8vZ0FZZfcHGNmtChd5iSjqK8N+Kjmw7xhGyynHSQWmqtELpXhTUrXbBvjyZ0aOXAPjo4HbYuuZ+0Vkg9t9M9ZY5yNXhjsFFrRE4OqNhkueicRH/0HjqrDr0bDhZMe38J3Cr71l8fdkLXDVuTUXyM7bbmoXOzDwbm7EJnACVC6TAxZnN2ZNlgOgrQiDPfaFRNZ76BwYUqnMRWyB1Iph4cMo1sP+bDNFfZ6bz+QYKqd6EzAR4cnA51/Ejtfz9+cIFfKYPORsKstkunfeWXh8Q22HNhfBO3RnEAQ2Y6vx0sIrQIXwHXzcHotID7IIqnI4bSudLoSONIFz1FG8yZ5E+g9UfsC85IR7XD0Q50aDvCPYQYHYISLOW41pNjGEuiAwTrUAjiy00yewR+vytlmInOV+X63x3o0Pac608idGi5PIB5UdLycKMcOuCwhniYsL49uCCINJt00UUGOjf76jWm+elQTwG/FgShQ1odLPrvE/qD5dABC5q8B0LDQ+pdOOjXFbNMT+fzMmGNaW46cS3dAY/zdGjVhQWYuWiCUujAHgF611zzQmdKENPJy0PgpadzlrQAOC8dl3qphAcNpkMqhzaWn7WIUkgLbkqhE8KZia/BRqRrirngCL1e9H8GOkmLE3PSYZZgCKUG0yHPFxwZz+Z4IJ4ohQ5iBBm/hOxBEpONrrWMmquD6I2rm07IDPDFvhlMh5RhaKEiGYqFUAYdbNlkE/gtckNQh20r8tqH23/rpON1jtnJs7Y4AgDpkOwOFPOPhLjY8JRBB3NEk0qMnYbrJFwTV9tRw1MhnQtOYhQ18DKAdMgdnqJ3GLtSxMqvDDpYBUtsaAHH8IB5MhyI+BVIZ/kC/mDaNQjymA6kQ7qqn9A7jEfdYlVZNx2h3oLEW14YHXST0JR0AItBOqTGEAfh0E/OhON10yE+tt4pqihFFFJeEB3FBrup6JxCrQhIh4w1VWEV5MK5cLxuOmlKYquou1kIHWf6gm/PloJOG66IQTqkdkhDR/QmvB860Y8VQWep3Fk3kc4cW2mupIMvpI/dCWIv8APSYTecgKSkc3F6gu+Ck/vdGUflfCC4wD4cnWCatKM7pdPqCAobrjJoMne7Y96dbcJp8tcQUs2+gVLSUS2y1b3d6SZre8FOdFJt5V4wnSw9at36bMQzknqF8A50/NtUX+EpmA4ZjQIT01RkxK3beIfMTKXecC43ncBJ+QmRgukQT45q07YudKFVPx3I96ZUTjoZPg5bMB2SHRQqRkRWNIi1X910uohdqPLRyfLtkILpeCQ7xW5ppDxFCnXTIZNrqTdrzEMnaYTDq2A61FmF78dFp67F1rduOlhPH1V2OoGf7ZtVRdMhty02+bFIBdITT9RNJ8kASVnpZP/eW9F0aH4hdh2Jd5MiqmqnQwLcVZNTrLLRcXJ8rKpoOjTqCFsSR2PGpI4roYOMZMunQ+OJQuQqr+Gu1cgTV+Cf5/jQW+F05JBJTrTbIFd9hA4SElM+HTriwSILiIXh9t8MdKZpRzi8CqdDHSL3YONKQ+Dl+usUyTBSBXRoABJ8Gcn0Pvo/PZ2j1CMcXsXTOcbfDst6ICeB3b2balMqoBPvYwl1OWlRkZc7PZ28n9cpno5HI0ZGUpRsvKFYKGdIycFBMVXQodGgwIVx8C+pFNLTyavi6bABivwjyKxRgvxw8e2Do/Uq6FBvzqrt4dvN8YKeodOR75IOc4v2BZ2+cwez+DDY7Hrx+Xm3HzYaIVdAldCxmEWIj4ex7fGKMcaV8D7pMKvfVjp4XHxqzrjtGcRZUegyyahq6Iw5Q9uz096ID+67jDs775SOxa7gBYQ44eSdBdiz1dBRrKDfiH2w3isda4Hc3FpyZ4FoKCZlT1ZExxqPbFych/Td0lEs+1d9ikV859hzVdEBHhIqfqD8fulYLrxRzqN6z/VjPjV7qjo6VghvQdEUauT3QAedDgkX0vZB14nu38bwnknPnkEMhQ8n0SFjK2wetC89W+2J5Bgsnw79OlLuKxUTvV5nwnSjF1fpPmDU6B4355fz68kDF+h4BRsKH25sjetib2o/Oo/HEIwHw7j79jjpAH6p8umUr3HY76xGL3WbkUuNfr/T6WO9mH+Bzr8rQ0dnGTo6y9DRWYaOzjJ0dJaho7MMHZ0Fbn5j6GiiP9COa4aOLnoDNl0zdLTR87lUuxk6GulMrN0MHZ30W6jdDB2t9PU2MHT01euRb+horB9LQ0dj3e05ho6+en3yDR2NRRwHho6W+hk4ho6+uvnlGzoa62Vq6GisN98xdPTV8/nU0NFY+3/rtsBIobu6DTBa63/A7MyeeQv6qgAAAABJRU5ErkJggg=='
                          alt="Your Company"
                        />
                        <img
                          className=''
                          src='data:image/png;base64,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'
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) =>
                          item[userInfo.role] ? (
                            <Link
                              key={item.name}
                              to={item.link}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </Link>
                      {items.length > 0 && (
                        <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          {items.length}
                        </span>
                      )}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={userInfo.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userInfo.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {/* this should come from userInfo */}
                        {userInfo.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {userInfo.email}
                      </div>
                    </div>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    {items.length > 0 && (
                      <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              E-Commerce
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>}
    </>
  );
}

export default NavBar;
