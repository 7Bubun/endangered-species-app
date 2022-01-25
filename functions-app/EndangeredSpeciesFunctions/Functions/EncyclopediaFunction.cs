using System.Collections.Generic;
using System.IO;
using System.Net;
using EndangeredSpeciesFunctions.DataAccess;
using EndangeredSpeciesFunctions.Models;
using EndangeredSpeciesFunctions.Models.DTO;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace EndangeredSpeciesFunctions.Functions
{
    public class EncyclopediaFunction
    {
        private readonly ISpeciesImageConnection connection;

        public EncyclopediaFunction(ISpeciesImageConnection connection)
        {
            this.connection = connection;
        }

        [Function("encyclopedia")]
        public HttpResponseData Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req)
        {
            ImageRequest request = GetRequestBody(req.Body);

            SpeciesWithImage species = connection.FindSpeciesWithImage(request);

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Body = CreateResponseBody(species);
            response.Headers.Add("Content-Type", "application/json");

            return response;
        }

        private ImageRequest GetRequestBody(Stream body)
        {
            using var reader = new StreamReader(body, encoding: System.Text.Encoding.UTF8);
            string json = reader.ReadToEnd();
            return JsonConvert.DeserializeObject<ImageRequest>(json);
        }

        private Stream CreateResponseBody(SpeciesWithImage species)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(JsonConvert.SerializeObject(species));
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}
