import setuptools
with open("README.md", "r") as fh:
    long_description = fh.read()
setuptools.setup(
    name="webpack-dchacca", # Replace with your own username
    version="0.0.1",
    author="David Chacca",
    author_email="dchacca@gmail.com",
    description="A small example package de webpack",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/dchacca/simple-webpack",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.7',
)