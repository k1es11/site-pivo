export class Recommender {
    constructor(data) {
        this.frequency = {};
        this.deviation = {};
        this.data = data;
    }

    computeDeviation() {
        for (let userRatings of Object.values(this.data)) {
            for (let [item, rating] of Object.entries(userRatings)) {
                this.frequency[item] = this.frequency[item] || {};
                this.deviation[item] = this.deviation[item] || {};
                for (let [item2, rating2] of Object.entries(userRatings)) {
                    if (item !== item2) {
                        this.frequency[item][item2] = this.frequency[item][item2] || 0;
                        this.deviation[item][item2] = this.deviation[item][item2] || 0.0;
                        this.frequency[item][item2]++;
                        this.deviation[item][item2] += (rating - rating2);
                    }
                }
            }
        }

        for (let [item, ratings] of Object.entries(this.deviation)) {
            for (let item2 in ratings) {
                ratings[item2] /= this.frequency[item][item2];
            }
        }
    }

    predictRating(userRatings, k) {
        let recommendations = {};
        let frequencies = {};
        for (let [item, rating] of Object.entries(userRatings)) {
            for (let [diffItem, diffRating] of Object.entries(this.deviation)) {
                if (!userRatings.hasOwnProperty(diffItem) && this.deviation[diffItem].hasOwnProperty(item)) {
                    let fre = this.frequency[diffItem][item];
                    recommendations[diffItem] = (recommendations[diffItem] || 0.0) + (diffRating[item] + rating) * fre;
                    frequencies[diffItem] = (frequencies[diffItem] || 0) + fre;
                }
            }
        }

        recommendations = Object.entries(recommendations)
            .map(([k, v]) => [k, v / frequencies[k]])
            .sort((a, b) => b[1] - a[1])
            .slice(0, k);

        return recommendations;
    }
}

