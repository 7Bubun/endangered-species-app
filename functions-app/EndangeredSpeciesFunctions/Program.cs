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
                    s.AddTransient<ISpeciesImageConnection, SpeciesImageConnection>();
                    s.AddTransient<ISpeciesNamesConnection, SpeciesNamesConnection>();
                })
                .Build();

            host.Run();
        }
    }
}