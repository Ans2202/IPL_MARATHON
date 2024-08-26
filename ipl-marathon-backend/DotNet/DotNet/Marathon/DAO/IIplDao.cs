using Marathon.Models;

namespace Marathon.DAO
{
    public interface IIplDao
    {
        Task<int> InsertPlayer(Player p);
        Task<Player> GetPlayerById(int id);
        Task<List<MatchStatistic>> GetMatchStatistics();

        Task<List<PlayerStatistic>> GetTopPlayersByFanEngagement();

        Task<List<Match>> GetMatchesByDateRange(DateTime startDate, DateTime endDate);

    }
}



