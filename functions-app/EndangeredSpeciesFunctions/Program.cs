using EndangeredSpeciesFunctions.DataAccess;
using Microsoft.Azure.Functions.Worker.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;
using System.Threading.Tasks;

namespace EndangeredSpeciesFunctions
{
    public class Program
    {
        public static void Main()
        {
            var host = new HostBuilder()
                .ConfigureFunctionsWorkerDefaults()
                .ConfigureAppConfiguration(app =>
                {
                    app.AddJsonFile("appsettings.json");
                })
                .ConfigureServices(s =>
                {
                    s.AddTransient<ISpeciesInformationConnection, SpeciesInformationConnection>();
                })
                .Build();

            //host.Run();
            var test = host.Services.GetService<ISpeciesInformationConnection>();
            TestClass testClass = new TestClass(test);
            testClass.Test("dog");
        }
    }
}