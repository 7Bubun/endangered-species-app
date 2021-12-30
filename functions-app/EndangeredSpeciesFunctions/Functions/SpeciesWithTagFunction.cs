using System;
using System.Collections.Generic;
using System.Net;
using EndangeredSpeciesFunctions.DataAccess;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text.Json;
using EndangeredSpeciesFunctions.Models;
using System.IO;
using EndangeredSpeciesFunctions.Models.DTO;

namespace EndangeredSpeciesFunctions.Functions
{
    public class SpeciesWithTagFunction
    {
        private readonly ISpeciesInformationConnection connection;

        public SpeciesWithTagFunction(ISpeciesInformationConnection connection)
        {
            this.connection = connection;
        }

        [Function("species")]
        public HttpResponseData Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req)
        {
            TagRequest request = GetRequestBody(req.Body);

            Species speciesInformation = connection.FindSpeciesWithInformation(request);
            SpeciesDTO speciesDTO = StaticSpeciesMapper.SpeciesToDTO(speciesInformation);

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Body = CreateResponseBody(speciesDTO);
            response.Headers.Add("Content-Type", "application/json");

            return response;
        }

        private TagRequest GetRequestBody(Stream body)
        {
            using var reader = new StreamReader(body, encoding: System.Text.Encoding.UTF8);
            string json = reader.ReadToEnd();
            return JsonConvert.DeserializeObject<TagRequest>(json);
        }

        private Stream CreateResponseBody(SpeciesDTO speciesList)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(JsonConvert.SerializeObject(speciesList));
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}
