# Translate API

This is a simple Express.js application that provides an API endpoint for translating text using the Google Translate API. It takes three query parameters: `source-lang`, `target-lang`, and `query`, and returns the translated text in the specified target language.

## Getting Started

Before using this API, make sure you have Node.js installed on your system.

1. Clone this repository or download the source code.

2. Navigate to the project directory in your terminal.

3. Install the required dependencies by running the following command:

```
$ npm install
```

4. Start the Express server:

```
$ npm start
```

## Usage

### Endpoint

GET /v1/api/translate/

### Query Parameters

`source-lang` (required): The source language code

`target-lang` (required): The target language code

`query` (required): The text you want to translate

## Example

You can use a web browser or a tool like curl to make a GET request to the API endpoint. Here's an example using curl:

```
$ curl "http://localhost/v1/api/translate/?source-lang=en&target-lang=fr&query=Hello%20world"
```

### Response

The API will respond with a JSON object:

```
{
    "status": "ok",
    "result": "Bonjour le monde",
    "source-lang": "en",
    "target-lang": "fr"
}
```

`status`: Indicates the status of the translation request.

`result`: The translated text.

`source-lang`: The source language code.

`target-lang`: The target language code.

## Error Handling

If any of the required query parameters (source-lang, target-lang, or query) are missing, the API will respond with a `400` Bad Request status and an error message.

```
{
    "status": "error",
    "error": "Missing parameters"
}
```

If there is an internal error while making the translation request to the Google Translate API, the API will respond with a `500` Internal Server Error status and an error message.

```
{
    "status": "error",
    "error": "Internal error"
}
```

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/theshoqanebi/google-translate-wrapper/blob/main/LICENSE) file for details.
