from setuptools import setup

setup(
    name='chatgptwordle',
    version='1.0.0',
    author='Jack Mason',
    author_email='masonjack116aws@gmail.com',
    url='https://github.com/masonator24601/chatgpt-wordle-prototype',
    description='Installs the django app for ChatGPT wordle',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License (GPL)',
        'Operating System :: POSIX',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries',
    ],
    packages=[
        'chatgptwordle'
    ],
    install_requires=[
        'asgiref==3.6.0',
        'Django==4.1.7',
        'django-cors-headers==3.14.0',
        'djangorestframework==3.14.0',
        'pytz==2022.7.1',
        'sqlparse==0.4.3',
        'tzdata==2022.7'
    ]
)