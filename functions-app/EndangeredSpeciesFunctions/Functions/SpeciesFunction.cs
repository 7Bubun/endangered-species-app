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
    public class SpeciesFunction
    {
        private readonly ISpeciesInformationConnection speciesConnection;
        private readonly ISpeciesNamesConnection namesConnection;

        public SpeciesFunction(ISpeciesInformationConnection connection,
            ISpeciesNamesConnection namesConnection)
        {
            this.speciesConnection = connection;
            this.namesConnection = namesConnection;
        }

        [Function("species-tag")]
        public HttpResponseData RunPost([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req)
        {
            TagRequest request = GetRequestBody(req.Body);

            Species speciesInformation = speciesConnection.FindSpeciesWithInformation(request);
            SpeciesDTO speciesDTO = StaticSpeciesMapper.SpeciesToDTO(speciesInformation);

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Body = CreateResponseBody(speciesDTO);
            response.Headers.Add("Content-Type", "application/json");

            return response;
        }

        [Function("species")]
        public HttpResponseData RunGet([HttpTrigger(AuthorizationLevel.Function, "get")] HttpRequestData req)
        {
            List<SpeciesNameResponse> names = namesConnection.GetAllSpeciesNames();

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Body = CreateResponseBody(names);
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

        private Stream CreateResponseBody(List<SpeciesNameResponse> speciesNameList)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(JsonConvert.SerializeObject(speciesNameList));
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}
