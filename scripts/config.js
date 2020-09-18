/*
 *
 * Mirai Console Loader
 *
 * Copyright (C) 2020 iTX Technologies
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author PeratX
 * @website https://github.com/iTXTech/mirai-console-loader
 *
 */

importPackage(org.apache.commons.cli);
importPackage(java.net);
importPackage(java.lang);

loader.options.addOption(Option.builder("p").desc("Specify HTTP proxy for current instance")
    .longOpt("proxy").hasArg().argName("address").build());
loader.options.addOption(Option.builder("c").desc("Set log level")
    .longOpt("log-level").hasArg().argName("level").build());

phase.cli = () => {
    if (loader.cli.hasOption("p")) {
        let addr = loader.cli.getOptionValue("p").split(":");
        loader.proxy = new InetSocketAddress(addr[0], Integer.parseInt(addr[1]));
    }
    if (loader.cli.hasOption("c")) {
        let lvl = Integer.parseInt(loader.cli.getOptionValue("c"));
        loader.logger.setLogLevel(lvl);
    }
}