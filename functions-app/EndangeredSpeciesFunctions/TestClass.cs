using EndangeredSpeciesFunctions.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndangeredSpeciesFunctions
{
    public class TestClass
    {
        private readonly ISpeciesInformationConnection connection;

        public TestClass(ISpeciesInformationConnection connection)
        {
            this.connection = connection;
        }

        public void Test(params string[] tags)
        {
            connection.FindSpeciesWithInformation(tags);
        }
    }
}
