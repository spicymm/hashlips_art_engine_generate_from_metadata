# Generate Images from Metadata - forked from HashLips

Rebuild images based on previously generated metadata from HashLips. Useful for updating image layers while maintaining same metadata.

## Installation

Clone repo to your machine.

```sh
git clone https://github.com/spicymm/hashlips_art_engine_generate_from_metadata.git
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install
```

## Usage

Place previously generated \_metadata.json file in layers folder. All assets and folder names in layers folder need to be the same as the original layers used to generate the \_metadata.json file.

To generate images from metadata run:

```
npm run metadata
```

Images and new metadata will be output in the build folder - be sure to remove any assets required or it'll be overwritten.

Hope this will be useful to you :)
